import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Users,
  Target,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Award,
  CheckCircle,
  Star,
} from "lucide-react";

export default function Lessons() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bài Học Rút Ra
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Những kinh nghiệm quý báu từ hành trình phát triển tại FPT Telecom
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kỹ Năng Kỹ Thuật
            </h2>
            <p className="text-gray-600">Phát triển chuyên môn và công nghệ</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Skills Progress */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Mức Độ Thành Thạo</CardTitle>
                    <CardDescription>Đánh giá kỹ năng hiện tại</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Laravel Framework
                    </span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <Progress value={85} className="h-3" />
                  <p className="text-xs text-gray-500 mt-1">
                    Từ project VOC và OmniAgent
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">SQL & Database</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <Progress value={80} className="h-3" />
                  <p className="text-xs text-gray-500 mt-1">
                    MySQL, PostgreSQL, query optimization
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">API Development</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <Progress value={90} className="h-3" />
                  <p className="text-xs text-gray-500 mt-1">
                    RESTful APIs, documentation, testing
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Big Data (Kafka, Kibana)
                    </span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <Progress value={75} className="h-3" />
                  <p className="text-xs text-gray-500 mt-1">
                    Streaming data, visualization
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Monitoring (OpenTelemetry)
                    </span>
                    <span className="text-sm text-gray-500">70%</span>
                  </div>
                  <Progress value={70} className="h-3" />
                  <p className="text-xs text-gray-500 mt-1">
                    Application performance monitoring
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Learnings */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">
                      Bài Học Quan Trọng
                    </CardTitle>
                    <CardDescription>
                      Những insight quan trọng nhất
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Clean Code là chìa khóa
                    </h4>
                    <p className="text-sm text-gray-600">
                      Code phải dễ đọc, dễ maintain và có thể mở rộng. Từ
                      project VOC, tôi học được tầm quan trọng của việc viết
                      code sạch.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Testing không thể bỏ qua
                    </h4>
                    <p className="text-sm text-gray-600">
                      Unit tests và integration tests giúp đảm bảo chất lượng
                      code và giảm bugs trong production.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Monitoring là cần thiết
                    </h4>
                    <p className="text-sm text-gray-600">
                      OpenTelemetry giúp tôi hiểu rõ hơn về performance và có
                      thể debug nhanh chóng khi có vấn đề.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Documentation quan trọng
                    </h4>
                    <p className="text-sm text-gray-600">
                      API documentation và code comments giúp team hiểu và
                      maintain code dễ dàng hơn.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kỹ Năng Mềm
            </h2>
            <p className="text-gray-600">Phát triển cá nhân và teamwork</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Làm Việc Nhóm</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Học cách phối hợp hiệu quả với team, tham gia code review và
                  chia sẻ kiến thức.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Code review hàng ngày</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Chia sẻ knowledge</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Hỗ trợ đồng nghiệp</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Quản Lý Thời Gian</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Làm việc dưới áp lực deadline, ưu tiên công việc và đảm bảo
                  chất lượng.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Planning & prioritization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Deadline management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Quality assurance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Giải Quyết Vấn Đề</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Debug lỗi hệ thống, tìm giải pháp sáng tạo và học hỏi từ thất
                  bại.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Debugging skills</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Creative solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Learn from failures</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle>Học Hỏi Liên Tục</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Thích ứng với công nghệ mới, hiểu rõ ngành telecom và nhu cầu
                  khách hàng.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Continuous learning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Technology adaptation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>Industry knowledge</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thách Thức & Giải Pháp
            </h2>
            <p className="text-gray-600">
              Những khó khăn đã vượt qua và bài học rút ra
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">
                  Thách Thức: Performance Bottleneck
                </CardTitle>
                <CardDescription>Dự án VOC - Xử lý dữ liệu lớn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Vấn đề:
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• API xử lý dữ liệu chậm khi có nhiều request</li>
                      <li>• Database query không tối ưu</li>
                      <li>• Memory usage cao khi xử lý batch data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Giải pháp:
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Implement caching với Redis</li>
                      <li>• Optimize SQL queries và thêm indexes</li>
                      <li>• Sử dụng queue system cho batch processing</li>
                      <li>• Implement pagination cho large datasets</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Kết quả:</strong> Giảm 60% thời gian phản hồi API và
                    tăng 40% throughput.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  Thách Thức: Integration Complexity
                </CardTitle>
                <CardDescription>
                  Dự án OmniAgent - Tích hợp nhiều hệ thống
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Vấn đề:
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Mỗi hệ thống có API format khác nhau</li>
                      <li>• Error handling phức tạp</li>
                      <li>• Data transformation phức tạp</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Giải pháp:
                    </h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Tạo adapter pattern cho mỗi integration</li>
                      <li>• Implement retry mechanism và circuit breaker</li>
                      <li>• Sử dụng OpenTelemetry để monitor</li>
                      <li>• Tạo comprehensive error handling</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Kết quả:</strong> Tăng 80% độ ổn định và giảm 70%
                    thời gian debug.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Learning Goals */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mục Tiêu Học Tập Tiếp Theo
            </h2>
            <p className="text-gray-600">
              Những kỹ năng và công nghệ muốn phát triển
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Nâng cao kỹ năng React, TypeScript và modern frontend
                  frameworks.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Next.js
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Cloud Computing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Học AWS/Azure để deploy và scale applications.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    AWS
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Azure
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Docker
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Leadership Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Phát triển kỹ năng leadership và mentoring.
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    Team Lead
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Mentoring
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Project Management
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
