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
  Network,
  Zap,
  Shield,
  Settings,
  BarChart3,
  Globe,
  Cpu,
  Workflow,
  Layers,
  CheckCircle,
  Clock,
  Users,
  GitBranch,
} from "lucide-react";

export default function OmniAgentProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white dark:text-white mb-4">
            OmniAgent Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 dark:text-gray-300 mb-6">
            Hệ thống tích hợp và quản lý các service microservices
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Đang phát triển
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Team: 8 người
            </Badge>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tổng Quan Dự Án
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Hệ thống tích hợp và quản lý microservices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Details */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Network className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Thông Tin Dự Án</CardTitle>
                    <CardDescription>
                      Chi tiết về OmniAgent Project
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Mục tiêu chính
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Tạo ra một hệ thống tích hợp thống nhất để quản lý và điều
                      phối các microservices
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Quy mô dự án
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Tích hợp 20+ microservices, xử lý 50,000+ requests/ngày
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Thời gian phát triển
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Khởi động: Q2/2023, Dự kiến hoàn thành: Q2/2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology Stack */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Công Nghệ Sử Dụng</CardTitle>
                    <CardDescription>Stack công nghệ chính</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Laravel 11</Badge>
                    <Badge variant="outline">PHP 8.3</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">Redis</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Microservices
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Kubernetes</Badge>
                    <Badge variant="outline">API Gateway</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Monitoring
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">OpenTelemetry</Badge>
                    <Badge variant="outline">Jaeger</Badge>
                    <Badge variant="outline">Prometheus</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-16 px-6 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Kiến Trúc Hệ Thống
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Sơ đồ kiến trúc OmniAgent
            </p>
          </div>

          {/* Central Node - OmniAgent Core */}
          <div className="flex justify-center mb-12 relative">
            <Card className="w-80 bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 shadow-2xl relative z-10">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">OmniAgent Core</CardTitle>
                <CardDescription className="text-white/80">
                  Trung tâm điều phối microservices
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Architecture Nodes with connecting lines */}
          <div className="relative">
            {/* Connecting lines */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 5 }}
            >
              <svg className="w-full h-full">
                {/* Curved lines from center to nodes */}
                <path
                  d="M 50% 50% Q 35% 37% 20% 25%"
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="20%,25% 18%,23% 22%,23%" fill="#10b981" />

                <path
                  d="M 50% 50% Q 65% 37% 80% 25%"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="80%,25% 78%,23% 82%,23%" fill="#3b82f6" />

                <path
                  d="M 50% 50% Q 32% 55% 15% 60%"
                  stroke="#f97316"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="15%,60% 13%,58% 17%,58%" fill="#f97316" />

                <path
                  d="M 50% 50% Q 68% 55% 85% 60%"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="85%,60% 83%,58% 87%,58%" fill="#8b5cf6" />

                <path
                  d="M 50% 50% Q 50% 67% 50% 85%"
                  stroke="#6366f1"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="50%,85% 48%,83% 52%,83%" fill="#6366f1" />

                <path
                  d="M 50% 50% Q 42% 67% 35% 85%"
                  stroke="#ec4899"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="35%,85% 33%,83% 37%,83%" fill="#ec4899" />
              </svg>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
              style={{ zIndex: 10 }}
            >
              {/* API Gateway */}
              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg dark:text-white">
                        API Gateway
                      </CardTitle>
                      <CardDescription className="dark:text-gray-300">
                        Điểm vào thống nhất
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Request routing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Load balancing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Rate limiting</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Discovery */}
              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Layers className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        Service Discovery
                      </CardTitle>
                      <CardDescription>
                        Tự động phát hiện service
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Health checks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Service registry</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Auto-scaling</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Circuit Breaker */}
              <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Circuit Breaker</CardTitle>
                      <CardDescription>Bảo vệ hệ thống</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Fault tolerance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Retry mechanism</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Fallback handling</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Monitoring */}
              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Monitoring</CardTitle>
                      <CardDescription>Giám sát hệ thống</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Distributed tracing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Performance metrics</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Alert system</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Configuration */}
              <Card className="border-l-4 border-l-indigo-500 hover:shadow-lg transition-shadow dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Configuration</CardTitle>
                      <CardDescription>Cấu hình tập trung</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Centralized config</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Environment management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Feature flags</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Workflow Engine */}
              <Card className="border-l-4 border-l-pink-500 hover:shadow-lg transition-shadow dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Workflow className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Workflow Engine</CardTitle>
                      <CardDescription>Điều phối workflow</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>Orchestration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>Event-driven</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>State management</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Development Progress */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tiến Độ Phát Triển
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Các giai đoạn phát triển của dự án
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">
                  Đã Hoàn Thành
                </CardTitle>
                <CardDescription>Các tính năng đã triển khai</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• API Gateway cơ bản</li>
                  <li>• Service Discovery mechanism</li>
                  <li>• Basic monitoring setup</li>
                  <li>• Docker containerization</li>
                  <li>• CI/CD pipeline</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  Đang Phát Triển
                </CardTitle>
                <CardDescription>Công việc hiện tại</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Advanced circuit breaker</li>
                  <li>• Distributed tracing</li>
                  <li>• Auto-scaling mechanism</li>
                  <li>• Advanced monitoring</li>
                  <li>• Performance optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
