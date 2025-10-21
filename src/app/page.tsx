import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Code,
  Database,
  Users,
  Rocket,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hành Trình Phát Triển
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Từ thực tập sinh đến Developer Fullstack tại FPT Telecom
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Thời gian: 1/1/2025 - Hiện tại</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Vị trí: Dev Fullstack</span>
              </div>
            </div>
          </div>

          {/* Timeline Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-orange-200 dark:border-orange-800 hover:shadow-lg transition-shadow dark:bg-gray-800">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg dark:text-white">VOC Project</CardTitle>
                <CardDescription className="dark:text-gray-300">Customer Voice Telecom</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">Kafka</Badge>
                  <Badge variant="secondary">Kibana</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow dark:bg-gray-800">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg dark:text-white">OmniAgent</CardTitle>
                <CardDescription className="dark:text-gray-300">Multi-channel Agent Tool</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">OpenTelemetry</Badge>
                  <Badge variant="secondary">API</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow dark:bg-gray-800">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg dark:text-white">OmniSR</CardTitle>
                <CardDescription className="dark:text-gray-300">Upcoming Project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Frontend</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/about">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer dark:bg-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Giới Thiệu
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Tìm hiểu về hành trình cá nhân
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/work">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer dark:bg-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Database className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Công Việc
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Dự án và kinh nghiệm làm việc
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/lessons">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer dark:bg-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Bài Học</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Kỹ năng và kinh nghiệm rút ra
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/future">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer dark:bg-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Kế Hoạch</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Định hướng tương lai</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Khám phá hành trình phát triển của tôi tại FPT Telecom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Xem Công Việc
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Tìm Hiểu Thêm
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
