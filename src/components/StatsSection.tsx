import { Users, Heart, Clock, Sparkles } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "1,247+",
      label: "Community Members",
      color: "blue",
    },
    {
      icon: Heart,
      value: "856",
      label: "Connections Made",
      color: "rose",
    },
    {
      icon: Sparkles,
      value: "143",
      label: "Active Givers",
      color: "purple",
    },
    {
      icon: Clock,
      value: "3,421",
      label: "Hours Given",
      color: "green",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    rose: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 dark:text-white mb-4">Our Growing Impact</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Together, we're building a more connected and supportive community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-tile p-6 rounded-2xl text-center hover:scale-105 transition-transform"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                    colorClasses[stat.color as keyof typeof colorClasses]
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
