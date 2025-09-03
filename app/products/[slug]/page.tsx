"use client";

import { ChatSupport } from "@/components/chat-support";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { CheckCircle, MessageCircle, Package, Shield, Star, Truck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const placeholderImg = "/assets/placeholder.jpg";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = PRODUCT_CATEGORIES.find((p) => p.slug === slug);
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    length: "",
    width: "",
    depth: "",
    material: "Need Consultation",
    print: "Need Consultation",
    finishing: "Need Consultation",
    additionalOption: "Choose Option",
    addUp: "Choose Option",
    quantity: "500",
  });

  const [submitting, setSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.name.trim()) return "Name is required";
    if (!emailRegex.test(form.email)) return "Valid email is required";
    if (!form.phone.trim()) return "Phone is required";
    if (!form.length || !form.width || !form.depth) return "All dimensions are required";
    if (Number(form.length) <= 0 || Number(form.width) <= 0 || Number(form.depth) <= 0)
      return "Dimensions must be positive";
    return "";
  };

  const handleAddToQuote = async () => {
    const error = validate();
    if (error) {
      toast({ title: "Validation error", description: error });
      return;
    }
    setSubmitting(true);
    try {
      emailjs.init("shQGEnnog2UpWxhdL");
      await emailjs.send(
        "service_vhwzbeo",
        "template_9epu9ft",
        {
          to_email: "theasxis.packaging@gmail.com",
          // to_email: "theasxis.packaging@gmail.com",
          subject: `Add to Quote - ${product?.name ?? "Product"}`,
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          product_type: product?.name ?? slug,
          quantity: form.quantity,
          dimensions: `${form.length}" x ${form.width}" x ${form.depth}"`,
          material: form.material,
          printing: form.print,
          finishing: form.finishing,
          additional_option: form.additionalOption,
          add_up: form.addUp,
          file_name: selectedFile?.name || "No file attached",
        }
      );

      // Persist to localStorage as a lightweight quote cart entry
      const existing = JSON.parse(localStorage.getItem("quoteItems") || "[]");
      const item = {
        slug,
        productName: product?.name ?? slug,
        quantity: form.quantity,
        dimensions: { length: form.length, width: form.width, depth: form.depth },
        material: form.material,
        printing: form.print,
        finishing: form.finishing,
        additionalOption: form.additionalOption,
        addUp: form.addUp,
        contact: { name: form.name, email: form.email, phone: form.phone },
        fileName: selectedFile?.name || null,
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem("quoteItems", JSON.stringify([item, ...existing]));

      toast({ title: "Added to quote", description: "We received your request.", className: "border-green-600 text-green-700" });
    } catch (err) {
      toast({ title: "Failed to submit", description: "Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
              Back to Products
            </Button>
          </Link>
        </div>
        <Footer />
        <ChatSupport />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <section className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[var(--axis-orange)]">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-[var(--axis-orange)]">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[var(--axis-dark-blue)] font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Product Images */}
            <div>
              {/* Main Product Image */}
              <div className="mb-4">
                <img
                  src={product.image || placeholderImg}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = placeholderImg;
                  }}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2">
                <img
                  src={product.image || placeholderImg}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderImg; }}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded border-2 border-[var(--axis-orange)]"
                />
                <img
                  src={product.image || placeholderImg}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderImg; }}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded border border-gray-300"
                />
                <img
                  src={product.image || placeholderImg}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderImg; }}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded border border-gray-300"
                />
                <img
                  src={product.image || placeholderImg}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderImg; }}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded border border-gray-300"
                />
              </div>
            </div>

            {/* Right Side - Product Details & Quote Form */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">{product.icon}</span>
                <Badge className="bg-[var(--axis-orange)] text-white">Premium Quality</Badge>
              </div>

              <h1 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
                {product.name}
              </h1>

              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              {/* Quote Form */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                      placeholder="Your email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                      placeholder="Your phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Length (Inch) *
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                      placeholder="Length"
                      value={form.length}
                      onChange={(e) => setForm({ ...form, length: e.target.value })}
                      min={0.1}
                      step={0.1}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Width (Inch) *
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                      placeholder="Width"
                      value={form.width}
                      onChange={(e) => setForm({ ...form, width: e.target.value })}
                      min={0.1}
                      step={0.1}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Depth (Inch) *
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]"
                      placeholder="Depth"
                      value={form.depth}
                      onChange={(e) => setForm({ ...form, depth: e.target.value })}
                      min={0.1}
                      step={0.1}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Material *
                    </label>
                    <select value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]">
                      <option>Need Consultation</option>
                      <option>Kraft Paper</option>
                      <option>Cardboard</option>
                      <option>Corrugated</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Print *</label>
                    <select value={form.print} onChange={(e) => setForm({ ...form, print: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]">
                      <option>Need Consultation</option>
                      <option>No Print</option>
                      <option>1 Color</option>
                      <option>2 Color</option>
                      <option>Full Color</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Finishing
                    </label>
                    <select value={form.finishing} onChange={(e) => setForm({ ...form, finishing: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]">
                      <option>Need Consultation</option>
                      <option>Matte</option>
                      <option>Gloss</option>
                      <option>UV Coating</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Options
                  </label>
                  <select value={form.additionalOption} onChange={(e) => setForm({ ...form, additionalOption: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]">
                    <option>Choose Option</option>
                    <option>Window Cutout</option>
                    <option>Handle</option>
                    <option>Embossing</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Add-up</label>
                  <select value={form.addUp} onChange={(e) => setForm({ ...form, addUp: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)]">
                    <option>Choose Option</option>
                    <option>Rush Order</option>
                    <option>Sample</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Design (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                    <input
                      id="design-upload"
                      type="file"
                      accept=".pdf,.ai,.psd,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
                        setSelectedFile(file);
                      }}
                    />
                    <label htmlFor="design-upload">
                      <Button asChild variant="outline" className="mb-2 cursor-pointer">
                        <span>Choose file</span>
                      </Button>
                    </label>
                    <p className="text-sm text-gray-500">
                      {selectedFile ? selectedFile.name : "No file chosen"}
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-lg font-semibold text-[var(--axis-orange)] mb-4">
                    PRICE ON REQUEST
                  </p>
                  <div className="flex items-center gap-4">
                    <select value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} className="px-3 py-2 border border-gray-300 rounded-md">
                      <option>500</option>
                      <option>1000</option>
                      <option>2000</option>
                      <option>5000</option>
                    </select>
                    <Button onClick={handleAddToQuote} disabled={submitting} className="bg-green-600 hover:bg-green-700 text-white px-8">
                      {submitting ? "ADDING..." : "ADD TO QUOTE"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Product Features & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why {product.name} is the perfect choice for your packaging needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Package className="h-12 w-12 text-[var(--axis-orange)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">Highest quality materials and expert craftsmanship</p>
            </Card>
            <Card className="text-center p-6">
              <Star className="h-12 w-12 text-[var(--axis-orange)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">
                Custom Design
              </h3>
              <p className="text-gray-600">Tailored to your brand and specific requirements</p>
            </Card>
            <Card className="text-center p-6">
              <Truck className="h-12 w-12 text-[var(--axis-orange)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">Quick turnaround times with worldwide shipping</p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-[var(--axis-orange)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">Certified</h3>
              <p className="text-gray-600">ISO certified and compliant with industry standards</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">
                Product Specifications
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Customizable sizes and dimensions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Premium materials and finishes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Full-color printing capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Eco-friendly options available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Minimum order quantity: 100 pieces</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Production time: 10-15 business days</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">
                Why Choose This Product?
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Our {product.name} are designed with your business in mind. We understand the
                  importance of quality packaging in protecting your products and enhancing your
                  brand image.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With years of experience in the packaging industry, we've developed solutions that
                  combine functionality, aesthetics, and sustainability to meet the highest
                  standards.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Every product is crafted with attention to detail, ensuring that your packaging
                  not only looks great but also performs exceptionally well in real-world
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our packaging experts help you create the perfect {product.name} for your business.
            Get a custom quote today and see the difference quality packaging can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
              Get Custom Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)]"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat with Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] text-center mb-12">
            Related Products
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Card
                  key={relatedProduct.slug}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{relatedProduct.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{relatedProduct.description}</p>
                    <img
                      src={relatedProduct.image || placeholderImg}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholderImg; }}
                      alt={relatedProduct.name}
                      className="w-full h-24 object-cover rounded-lg mb-4"
                    />
                    <Link to={`/products/${relatedProduct.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-[var(--axis-orange)] text-[var(--axis-orange)] hover:bg-[var(--axis-orange)] hover:text-white"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatSupport />
    </div>
  );
}
