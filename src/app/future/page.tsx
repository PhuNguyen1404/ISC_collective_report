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
  Calendar,
  Target,
  TrendingUp,
  Rocket,
  Award,
  Users,
  Code,
  Cloud,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";

export default function Future() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kế Hoạch Tương Lai
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Định hướng phát triển và đóng góp cho FPT Telecom
          </p>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Lộ Trình Phát Triển
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Kế hoạch ngắn hạn và dài hạn
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-blue-500 to-green-500 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Current Status */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl text-orange-600">
                            Hiện Tại
                          </CardTitle>
                          <CardDescription>Tháng 10/2025</CardDescription>
                        </div>
                        <Badge className="bg-orange-100 text-orange-800">
                          Đang làm
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Developer Fullstack với kinh nghiệm hơn 1 năm, đang tham
                        gia dự án VOC và chuẩn bị cho OmniSR.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">PHP</Badge>
                        <Badge variant="secondary">Laravel</Badge>
                        <Badge variant="secondary">Kafka</Badge>
                        <Badge variant="secondary">OpenTelemetry</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center z-10">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Short-term Goals */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/2 pl-8">
                  <Card className="border-l-4 border-l-blue-500 dark:bg-gray-800">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl text-blue-600">
                            Ngắn Hạn (3-6 tháng)
                          </CardTitle>
                          <CardDescription>
                            Tháng 11/2025 - Tháng 3/2026
                          </CardDescription>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">
                          Kế hoạch
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Tham gia dự án OmniSR, phát triển kỹ năng frontend và
                        trở thành fullstack developer thực thụ.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">Frontend</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Medium-term Goals */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl text-green-600">
                            Trung Hạn (6-12 tháng)
                          </CardTitle>
                          <CardDescription>
                            Tháng 4/2026 - Tháng 9/2026
                          </CardDescription>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          Mục tiêu
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Đóng góp vào các dự án lớn, học cloud computing và phát
                        triển kỹ năng leadership.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">AWS</Badge>
                        <Badge variant="secondary">Azure</Badge>
                        <Badge variant="secondary">Leadership</Badge>
                        <Badge variant="secondary">Mentoring</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-10">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Long-term Goals */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center z-10">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/2 pl-8">
                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl text-purple-600">
                            Dài Hạn (1-2 năm)
                          </CardTitle>
                          <CardDescription>
                            Tháng 10/2026 - Tháng 10/2027
                          </CardDescription>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">
                          Tầm nhìn
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Trở thành Senior Developer, đóng góp vào chiến lược công
                        ty và mentoring junior developers.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Senior Dev</Badge>
                        <Badge variant="secondary">Architecture</Badge>
                        <Badge variant="secondary">Strategy</Badge>
                        <Badge variant="secondary">Innovation</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Goals */}
      <section className="py-16 px-6 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Mục Tiêu Chi Tiết
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Kế hoạch cụ thể cho từng giai đoạn
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Short-term Goals */}
            <Card className="border-l-4 border-l-blue-500 dark:bg-gray-800">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-blue-600">
                      Ngắn Hạn (3-6 tháng)
                    </CardTitle>
                    <CardDescription>Mục tiêu trước mắt</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Tham gia Project OmniSR
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Phát triển giao diện frontend với React và TypeScript
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          React
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          TypeScript
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Next.js
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Tailwind CSS
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Trở thành Fullstack Developer
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Nâng cao kỹ năng frontend để trở thành fullstack thực
                        thụ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Học thêm công nghệ mới
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Mở rộng kiến thức về modern frontend frameworks và tools
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Cải thiện kỹ năng mềm
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Phát triển kỹ năng giao tiếp và presentation
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Long-term Goals */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-green-600">
                      Dài Hạn (1-2 năm)
                    </CardTitle>
                    <CardDescription>Tầm nhìn phát triển</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Đóng góp vào các dự án lớn
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Tham gia vào các project quan trọng của công ty
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Hướng tới vị trí Senior Developer
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Phát triển kỹ năng leadership và mentoring
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Học Cloud Computing
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        AWS/Azure để hỗ trợ scalability hệ thống telecom
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          AWS
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Azure
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Docker
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Kubernetes
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Đóng góp ý tưởng cải tiến
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Nâng cao chất lượng dịch vụ và hiệu quả làm việc
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Lộ Trình Học Tập
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Kế hoạch phát triển kỹ năng và kiến thức
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Frontend Mastery</CardTitle>
                <CardDescription>Tháng 11/2025 - Tháng 2/2026</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 text-left">
                  <li>• React Advanced Patterns</li>
                  <li>• TypeScript Deep Dive</li>
                  <li>• Next.js App Router</li>
                  <li>• State Management (Zustand)</li>
                  <li>• Testing (Jest, React Testing Library)</li>
                </ul>
                <div className="mt-4">
                  <Badge className="bg-blue-100 text-blue-800">
                    In Progress
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Cloud & DevOps</CardTitle>
                <CardDescription>Tháng 3/2026 - Tháng 6/2026</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 text-left">
                  <li>• AWS Fundamentals</li>
                  <li>• Docker & Containerization</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Monitoring & Logging</li>
                </ul>
                <div className="mt-4">
                  <Badge variant="secondary">Planned</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Leadership & Soft Skills</CardTitle>
                <CardDescription>Tháng 7/2026 - Tháng 10/2026</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 text-left">
                  <li>• Team Leadership</li>
                  <li>• Mentoring & Coaching</li>
                  <li>• Project Management</li>
                  <li>• Communication Skills</li>
                  <li>• Strategic Thinking</li>
                </ul>
                <div className="mt-4">
                  <Badge variant="secondary">Future</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
