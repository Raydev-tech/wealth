import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah K.",
    role: "Small Business Owner",
    quote:
      "WorkNook makes finding a coworking space so easy! I can book a desk in minutes and get straight to work. Highly recommend!",
    avatar: "https://i.pinimg.com/236x/62/42/8e/62428eedf913cda8487cf92a62fd7245.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael R.",
    role: "Investor",
    quote:
      "Our team needed a flexible meeting space, and WorkNook delivered. The process was smooth, and the space was exactly what we needed!",
    avatar: "https://i.pinimg.com/236x/0b/29/af/0b29af4f0398d5a69da0bb8ffe6e22fd.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily T.",
    role: "Freelancer",
    quote:
      "I love the variety of spaces available! Whether I need a quiet spot or a collaborative space, WorkNook always has the perfect option.",
    avatar: "https://i.pinimg.com/236x/76/36/55/763655b444f6c56020fbcf71c83451f8.jpg",
    rating: 5,
  },
];

const workspaceImages = [
  "https://i.pinimg.com/236x/88/bd/60/88bd60f52b7e8440fade7377e1a9740b.jpg",
   "https://i.pinimg.com/236x/d1/55/74/d15574becacbadbd3e67f9ba1a317c43.jpg",
   "https://i.pinimg.com/236x/9e/38/15/9e3815b78043dfdae058f6a03b5f08df.jpg",
   "https://i.pinimg.com/236x/2d/3b/47/2d3b4798047fece7a8b8808eae9676cb.jpg",
   "https://i.pinimg.com/236x/8e/c0/3f/8ec03f8b85e46a8d406be7dcd642ce22.jpg",
   "https://i.pinimg.com/474x/fd/fd/b7/fdfdb77d0ac2d5926d4cc6b9a6c3fdb6.jpg",
   "https://i.pinimg.com/236x/30/6c/92/306c927704af5cdcbc302a90f89dc1e6.jpg",
];

const blogPosts = [
  {
    id: 1,
    title: "5 Steps to Achieve Financial Freedom",
    excerpt: "Learn the key steps to building long-term wealth and financial independence.",
    image:
      "https://i.pinimg.com/236x/4e/b8/06/4eb806909f35eaee71704eddad262ccb.jpg",
    category: "Personal Finance",
  },
  {
    id: 2,
    title: "The Power of Budgeting: How to Save Smart and Spend Wisely",
    excerpt: "Discover effective budgeting strategies that help you reach your financial goals.",
    image:
      "https://i.pinimg.com/236x/7f/5a/62/7f5a621814df7feb962c5150436c471f.jpg",
    category: "Budgeting",
  },
  {
    id: 3,
    title: "Investing 101: A Beginner's Guide to Growing Your Wealth",
    excerpt: "Everything you need to know to start your investment journey.",
    image:
      "https://i.pinimg.com/236x/d9/dc/07/d9dc073561f34685fd7622aa73bebee3.jpg",
    category: "Investing",
  },
];

export default function Blog() {
  return (
    <main className="pt-24">
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image Grid */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-16">
            {workspaceImages.map((image, index) => (
              <div key={index} className={`rounded-2xl overflow-hidden ${index === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={image} alt="Workspace" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Testimonials Label */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by creatives and leaders</h2>
            <p className="text-xl text-gray-500">from various industries</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col items-start">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">"{testimonial.quote}"</blockquote>
                <div className="flex items-center mt-auto">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Insights & Tips for Smarter Financial Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="group">
                <div className="relative mb-4">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-purple-400">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button className="text-purple-400 group-hover:text-purple-300 flex items-center">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
