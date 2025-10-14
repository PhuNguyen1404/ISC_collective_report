import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Database,
  Users,
  Code,
  Calendar,
  ExternalLink,
  CheckCircle,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function Work() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Công Việc Đã Đảm Nhận
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Hơn 1 năm đồng hành với những dự án ý nghĩa tại FPT Telecom
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
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
      </section>

      {/* Projects Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dự Án Đã Tham Gia
            </h2>
            <p className="text-gray-600">
              Các dự án quan trọng và đóng góp của tôi
            </p>
          </div>

          <div className="space-y-8">
            {/* VOC Project */}
            <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-orange-600">
                        Customer Voice Telecom (VOC)
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Hệ thống thu thập và phân tích phản hồi khách hàng
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className="bg-orange-100 text-orange-800">
                      Đang triển khai
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Tháng 3/2025 - Hiện tại</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Công việc chính:
                    </h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Phát triển API bằng Laravel để xử lý dữ liệu từ khách
                          hàng
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Tích hợp SQL cho lưu trữ và truy vấn dữ liệu
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Sử dụng Kibana để visualize dữ liệu khách hàng
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Implement Kafka cho streaming dữ liệu thời gian thực
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>Tham gia code review và testing</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Công nghệ sử dụng:
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="outline" className="text-sm">
                        PHP
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Laravel
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        MySQL
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Kafka
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Kibana
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        REST API
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Docker
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Git
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Kết quả đạt được:
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Tăng 40% hiệu suất xử lý dữ liệu</li>
                      <li>• Giảm 60% thời gian phản hồi API</li>
                      <li>• Xây dựng được 15+ API endpoints</li>
                      <li>• Tích hợp thành công với 3 hệ thống bên thứ ba</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    className="text-orange-600 border-orange-200 hover:bg-orange-50"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Xem chi tiết dự án
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* OmniAgent Project */}
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-blue-600">
                        OmniAgent
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Công cụ hỗ trợ đại lý đa kênh
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className="bg-green-100 text-green-800">
                      Hoàn thành
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Tháng 6/2025 - Tháng 9/2025</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Công việc chính:
                    </h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Xây dựng backend với PHP và Laravel framework
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Tích hợp OpenTelemetry để theo dõi hiệu suất ứng dụng
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Xử lý API cho tích hợp với các hệ thống bên thứ ba
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Debug và tối ưu hóa code, tham gia code review
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Viết unit tests và integration tests</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Công nghệ sử dụng:
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="outline" className="text-sm">
                        PHP
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Laravel
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        OpenTelemetry
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        API Integration
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Monitoring
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Redis
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        PostgreSQL
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Kết quả đạt được:
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Giảm 50% thời gian phản hồi của hệ thống</li>
                      <li>• Tăng 80% độ chính xác trong monitoring</li>
                      <li>• Xây dựng được 20+ API endpoints</li>
                      <li>• Đạt 95% code coverage trong testing</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    className="text-blue-600 border-blue-200 hover:bg-blue-50"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Xem chi tiết dự án
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Project */}
            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-green-600">
                        OmniSR (Upcoming)
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Hệ thống Service Request đa kênh
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className="bg-green-100 text-green-800">
                      Sắp triển khai
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Dự kiến: Tháng 11/2025</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Công việc dự kiến:
                    </h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start space-x-3">
                        <ArrowRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Phát triển giao diện frontend với React và TypeScript
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <ArrowRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Xây dựng component library tái sử dụng</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <ArrowRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Tích hợp với backend APIs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <ArrowRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Implement responsive design</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Công nghệ sẽ sử dụng:
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="outline" className="text-sm">
                        React
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        TypeScript
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Next.js
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Tailwind CSS
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Shadcn/UI
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Zustand
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        React Query
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Mục tiêu:
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Tạo ra giao diện user-friendly</li>
                      <li>• Đảm bảo performance tối ưu</li>
                      <li>• Học hỏi thêm về frontend modern</li>
                      <li>• Trở thành fullstack developer thực thụ</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    className="text-green-600 border-green-200 hover:bg-green-50"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Theo dõi tiến độ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kỹ Năng & Công Nghệ
            </h2>
            <p className="text-gray-600">
              Các công nghệ và kỹ năng đã sử dụng trong dự án
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Data & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Kafka</Badge>
                  <Badge variant="secondary">Kibana</Badge>
                  <Badge variant="secondary">Elasticsearch</Badge>
                  <Badge variant="secondary">OpenTelemetry</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Frontend (Learning)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Tools & Others</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">API Design</Badge>
                  <Badge variant="secondary">Testing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
