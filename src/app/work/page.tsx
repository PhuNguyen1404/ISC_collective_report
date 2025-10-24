import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  Layers,
  Target,
  Briefcase,
  Users,
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function Work() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Công Việc
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Các công việc chính đã thực hiện trong dự án
          </p>
        </div>
      </section>

      {/* Work Categories */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Loại Công Việc
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Phân loại các công việc đã thực hiện
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Development Work */}
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Phát Triển</CardTitle>
                    <CardDescription>Coding & Development</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• API Development</li>
                  <li>• Database Design</li>
                  <li>• Frontend Implementation</li>
                  <li>• Code Review & Testing</li>
                </ul>
              </CardContent>
            </Card>

            {/* Analysis Work */}
            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Phân Tích</CardTitle>
                    <CardDescription>Analysis & Planning</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Requirements Analysis</li>
                  <li>• System Design</li>
                  <li>• Performance Optimization</li>
                  <li>• Problem Solving</li>
                </ul>
              </CardContent>
            </Card>

            {/* Collaboration Work */}
            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Hợp Tác</CardTitle>
                    <CardDescription>Team Collaboration</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Team Meetings</li>
                  <li>• Documentation</li>
                  <li>• Knowledge Sharing</li>
                  <li>• Project Coordination</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Work Details */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Công Việc Theo Dự Án
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Chi tiết công việc trong từng dự án
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* VOC Project Work */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">VOC Project</CardTitle>
                    <CardDescription>Voice of Customer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Công việc đã thực hiện:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Thiết kế database cho chức năng mới</li>
                      <li>• Dựng Frontend cho chức năng mới</li>
                      <li>• Viết API cho các service khác dùng data</li>
                      <li>• Phát triển API thu thập feedback</li>
                      <li>• Xây dựng dashboard phân tích</li>
                      <li>• Tối ưu hóa performance</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Laravel 5.2</Badge>
                    <Badge variant="outline">PHP 7.0.33</Badge>
                    <Badge variant="outline">MySQL</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* OmniAgent Project Work */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">OmniAgent</CardTitle>
                    <CardDescription>Microservices Integration</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Công việc đã thực hiện:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Thiết kế database cho chức năng mới</li>
                      <li>• Dựng Frontend cho chức năng mới</li>
                      <li>• Viết API cho các service khác dùng data</li>
                      <li>• Phát triển API Gateway</li>
                      <li>• Implement service discovery</li>
                      <li>• Xây dựng monitoring system</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Laravel 5.2</Badge>
                    <Badge variant="outline">PHP 7.4</Badge>
                    <Badge variant="outline">Docker</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Timeline Công Việc
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Lộ trình công việc theo thời gian
            </p>
          </div>

          <div className="space-y-8">
            {/* Tháng 1-3 */}
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">
                      Tháng 1-3
                    </CardTitle>
                    <CardDescription>
                      Giai đoạn khởi đầu - VOC Project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Onboarding và tìm hiểu quy trình</li>
                      <li>• Tham gia phát triển VOC</li>
                      <li>• Học Laravel và PHP</li>
                      <li>• Làm quen với team và công việc</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tháng 5 */}
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="flex-1">
                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600">
                      Tháng 5
                    </CardTitle>
                    <CardDescription>
                      Giai đoạn phát triển - OmniAgent
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Tham gia dự án OmniAgent</li>
                      <li>• Phát triển microservices</li>
                      <li>• Học Docker và containerization</li>
                      <li>• Nâng cao kỹ năng technical</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
