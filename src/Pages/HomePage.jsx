import { ArrowRight, BarChart3, PieChart, LineChart, Lock, Search, Settings } from "lucide-react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Portfolio Value",
      data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 75, 85, 90],
      fill: false,
      borderColor: "rgb(147, 51, 234)",
      tension: 0.1,
    },
  ],
}


const features = [
  {
    title: "Financial Dashboard",
    description: "Get a comprehensive view of your finances in one place",
    icon: BarChart3,
  },
  {
    title: "Real-Time Tracking",
    description: "Monitor your investments and transactions in real-time",
    icon: LineChart,
  },
  {
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations based on your financial data",
    icon: PieChart,
  },
  {
    title: "Secure & Encrypted",
    description: "Bank-level security to protect your sensitive information",
    icon: Lock,
  },
  {
    title: "Customizable Goals",
    description: "Set and track your financial goals with ease",
    icon: Settings,
  },
  {
    title: "Smart Search",
    description: "Find any transaction or investment quickly",
    icon: Search,
  },
]

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Optimise and
              <br />
              Elevate Your Wealth
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Simplify your finances with tools that elevate your wealth management experience.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">Get Started</button>
              <button className="border border-white/20 text-white px-6 py-3 rounded-md hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-16 bg-white/5 rounded-lg p-6">
            <div className="h-[400px]">
              <Line
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      grid: {
                        color: "rgba(255, 255, 255, 0.1)",
                      },
                      ticks: {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                    },
                    x: {
                      grid: {
                        color: "rgba(255, 255, 255, 0.1)",
                      },
                      ticks: {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      labels: {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              A Smarter Way to
              <br />
              Manage Your Money
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powerful features to help you track, manage, and grow your wealth effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors">
                <feature.icon className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Powerful Features to
              <br />
              Simplify Your Finances
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to take control of your financial future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-lg group hover:bg-white/10 transition-colors">
              <div className="mb-4">
                <Search className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Data Optimization</h3>
              <p className="text-gray-400 mb-4">
                Advanced algorithms analyze your financial data to provide personalized insights.
              </p>
              <button className="text-purple-400 group-hover:text-purple-300 flex items-center">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
            <div className="bg-white/5 p-6 rounded-lg group hover:bg-white/10 transition-colors">
              <div className="mb-4">
                <LineChart className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Expense Tracking</h3>
              <p className="text-gray-400 mb-4">
                Real-time monitoring of your spending patterns and budget management.
              </p>
              <button className="text-purple-400 group-hover:text-purple-300 flex items-center">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
            <div className="bg-white/5 p-6 rounded-lg group hover:bg-white/10 transition-colors">
              <div className="mb-4">
                <Lock className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-400 mb-4">Enterprise-grade security to protect your financial information.</p>
              <button className="text-purple-400 group-hover:text-purple-300 flex items-center">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage;