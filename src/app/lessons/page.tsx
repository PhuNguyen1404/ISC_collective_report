import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Calendar,
  Code,
  Database,
  Globe,
  Layers,
  User,
  UserCheck,
  UserCog,
  GraduationCap,
  Briefcase,
  BookOpen,
  Target,
  Lightbulb,
} from "lucide-react";

export default function Lessons() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hành Trình Học Tập
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Chia sẻ kinh nghiệm và kiến thức từ các dự án thực tế
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Team Dev VOC - Omni Agent
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Đội ngũ phát triển dự án VOC và Omni Agent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* PM - Anh Kỳ Hữu Phát */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">PM</CardTitle>
                <CardDescription className="text-sm font-medium">
                  Anh Kỳ Hữu Phát
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Project Manager - Quản lý dự án và điều phối team
                </p>
              </CardContent>
            </Card>

            {/* BA - Anh Kiều Nhị Thiên Sang */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">BA</CardTitle>
                <CardDescription className="text-sm font-medium">
                  Anh Kiều Nhị Thiên Sang
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Business Analyst - Phân tích nghiệp vụ và yêu cầu
                </p>
              </CardContent>
            </Card>

            {/* Tech Lead - Anh Sằn Thanh Trà */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCog className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Tech Lead</CardTitle>
                <CardDescription className="text-sm font-medium">
                  Anh Sằn Thanh Trà
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Technical Lead - Dẫn dắt kỹ thuật và kiến trúc hệ thống
                </p>
              </CardContent>
            </Card>

            {/* Intern - Bạn Phạm Trung Nghĩa */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Intern</CardTitle>
                <CardDescription className="text-sm font-medium">
                  Bạn Phạm Trung Nghĩa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Intern Developer - Học tập và phát triển kỹ năng
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-16 px-6 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Công Việc
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Các công việc chính đã thực hiện trong dự án
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

      {/* Lessons Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Bài Học
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Những kinh nghiệm và kiến thức đã học được
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Lessons */}
            <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Kỹ Thuật</CardTitle>
                    <CardDescription>Technical Skills</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Laravel Framework</li>
                  <li>• PHP Best Practices</li>
                  <li>• Database Optimization</li>
                  <li>• API Design Patterns</li>
                  <li>• Microservices Architecture</li>
                </ul>
              </CardContent>
            </Card>

            {/* Soft Skills Lessons */}
            <Card className="border-l-4 border-l-pink-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Kỹ Năng Mềm</CardTitle>
                    <CardDescription>Soft Skills</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Team Communication</li>
                  <li>• Problem Solving</li>
                  <li>• Time Management</li>
                  <li>• Learning Agility</li>
                  <li>• Professional Development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Timeline
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Lộ trình phát triển và học tập
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Tháng 1-3 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-blue-600">
                            Tháng 1-3
                          </CardTitle>
                          <CardDescription>Giai đoạn khởi đầu</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Bắt đầu làm việc tại công ty</li>
                        <li>• Tìm hiểu quy trình làm việc</li>
                        <li>• Tham gia dự án đầu tiên - VOC</li>
                        <li>• Học hỏi và làm quen với môi trường</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

                <div className="flex-1 pl-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Khởi Đầu</h3>
                    <p className="text-sm text-gray-600">
                      Onboarding & VOC Project
                    </p>
                  </div>
                </div>
              </div>

              {/* Tháng 5 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Code className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Phát Triển</h3>
                    <p className="text-sm text-gray-600">Omni Agent Project</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>

                <div className="flex-1 pl-8">
                  <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-purple-600">
                            Tháng 5
                          </CardTitle>
                          <CardDescription>
                            Giai đoạn phát triển
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Tham gia dự án Omni Agent</li>
                        <li>• Phát triển kỹ năng chuyên môn</li>
                        <li>• Học hỏi công nghệ mới</li>
                        <li>• Đóng góp vào sản phẩm</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Dự Án Tham Gia
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Các dự án đã tham gia trong quá trình học tập
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* VOC Project */}
            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">VOC Project</CardTitle>
                    <CardDescription>Dự án đầu tiên</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Dự án Voice of Customer - Hệ thống thu thập và phân tích phản
                  hồi khách hàng
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    Laravel
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MySQL
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    API Development
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Omni Agent Project */}
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Omni Agent</CardTitle>
                    <CardDescription>Dự án tích hợp</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Hệ thống tích hợp đa dịch vụ với khả năng tự động hóa và quản
                  lý thông minh
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    Microservices
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    API Gateway
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Docker
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* OmniSR Project */}
            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">OmniSR</CardTitle>
                    <CardDescription>Dự án nền tảng</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Nền tảng Service Request tích hợp với OmniAgent để quản lý yêu
                  cầu dịch vụ
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
