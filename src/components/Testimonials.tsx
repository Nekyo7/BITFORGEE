import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Community Member",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      quote: "Community Connect helped me find someone to teach my kids Spanish. Now they're bilingual and we've made lifelong friends!",
    },
    {
      name: "Marcus Johnson",
      role: "Active Giver",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      quote: "I've been able to share my carpentry skills with neighbors who needed help. It feels amazing to give back to the community.",
    },
    {
      name: "Elena Rodriguez",
      role: "Seeker & Giver",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      quote: "Started as a seeker when I needed tech help, now I'm a giver offering web development tutoring. The cycle of giving continues!",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 dark:text-white mb-4">Community Stories</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from members who have experienced the power of mutual aid
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 glass-tile hover:scale-105 transition-transform">
              <Quote className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
