import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Network,
  Database,
  Shield,
  Settings,
  BarChart3,
  Cpu,
  Layers,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";

export default function OmniSRProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            OmniSR Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Đây là dự án tích hợp service OmniAgent vào platform SR
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Đang phát triển
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Team: 6 người
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
              Tích hợp OmniAgent với SR Platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Details */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Thông Tin Dự Án</CardTitle>
                    <CardDescription>
                      Chi tiết về OmniSR Platform
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Mục tiêu chính
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Tích hợp OmniAgent service vào SR Platform để tạo ra một
                      hệ thống quản lý yêu cầu dịch vụ thống nhất
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Quy mô dự án
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Tích hợp 2 hệ thống lớn, xử lý 30,000+ requests/ngày, phục
                      vụ 1000+ users
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology Stack */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-green-600" />
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
                    <Badge variant="outline">ExpressJS</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React 18</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Next.js 14</Badge>
                    <Badge variant="outline">TailwindCSS</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Integration
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">REST API</Badge>
                    <Badge variant="outline">GraphQL</Badge>
                    <Badge variant="outline">WebSocket</Badge>
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
              Kiến Trúc Tích Hợp
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Sơ đồ tích hợp OmniAgent với SR Platform
            </p>
          </div>

          {/* Central Node - OmniSR Core */}
          <div className="flex justify-center mb-12 relative">
            <Card className="w-80 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-2xl relative z-10">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">OmniSR Core</CardTitle>
                <CardDescription className="text-white/80">
                  Trung tâm tích hợp và xử lý
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Integration Nodes with connecting lines */}
          <div className="relative">
            {/* Connecting lines */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 5 }}
            >
              {/* Curved lines from center to nodes */}
              <svg className="w-full h-full">
                {/* Curved line to OmniAgent */}
                <path
                  d="M 50% 50% Q 35% 40% 20% 30%"
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="20%,30% 18%,28% 22%,28%" fill="#10b981" />

                {/* Curved line to SR Platform */}
                <path
                  d="M 50% 50% Q 65% 40% 80% 30%"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="80%,30% 78%,28% 82%,28%" fill="#3b82f6" />

                {/* Curved line to Database */}
                <path
                  d="M 50% 50% Q 32% 60% 15% 70%"
                  stroke="#f97316"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="15%,70% 13%,68% 17%,68%" fill="#f97316" />

                {/* Curved line to Security */}
                <path
                  d="M 50% 50% Q 68% 60% 85% 70%"
                  stroke="#ef4444"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="85%,70% 83%,68% 87%,68%" fill="#ef4444" />

                {/* Curved line to Monitoring */}
                <path
                  d="M 50% 50% Q 50% 67% 50% 85%"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="50%,85% 48%,83% 52%,83%" fill="#8b5cf6" />

                {/* Curved line to Configuration */}
                <path
                  d="M 50% 50% Q 42% 67% 35% 85%"
                  stroke="#6366f1"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="35%,85% 33%,83% 37%,83%" fill="#6366f1" />
              </svg>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
              style={{ zIndex: 10 }}
            >
              {/* OmniAgent Integration */}
              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Network className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">OmniAgent</CardTitle>
                      <CardDescription>Service tích hợp chính</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>API Gateway</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Service Discovery</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Load Balancing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* SR Platform */}
              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Layers className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">SR Platform</CardTitle>
                      <CardDescription>
                        Nền tảng quản lý yêu cầu
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Request Management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Ticket System</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Workflow Engine</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Database Layer */}
              <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Database</CardTitle>
                      <CardDescription>Lưu trữ dữ liệu</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>MySQL/PostgreSQL</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Redis Cache</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Data Replication</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Security</CardTitle>
                      <CardDescription>Bảo mật hệ thống</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Authentication</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Authorization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Data Encryption</span>
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
                      <span>OpenTelemetry</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Performance Metrics</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Alert System</span>
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
                      <CardDescription>Cấu hình hệ thống</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Environment Config</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Service Registry</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Feature Flags</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tính Năng Chính
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Các tính năng nổi bật của OmniSR
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">
                  Tích Hợp OmniAgent
                </CardTitle>
                <CardDescription>Service tích hợp thông minh</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• API Gateway tập trung</li>
                  <li>• Service Discovery tự động</li>
                  <li>• Load Balancing thông minh</li>
                  <li>• Circuit Breaker pattern</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  Quản Lý Service Request
                </CardTitle>
                <CardDescription>
                  Hệ thống quản lý yêu cầu dịch vụ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Workflow engine linh hoạt</li>
                  <li>• Ticket system tích hợp</li>
                  <li>• Approval process tự động</li>
                  <li>• Notification system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">
                  Monitoring & Analytics
                </CardTitle>
                <CardDescription>
                  Giám sát và phân tích hệ thống
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Real-time monitoring</li>
                  <li>• Performance metrics</li>
                  <li>• Alert system</li>
                  <li>• Dashboard analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">
                  Security & Compliance
                </CardTitle>
                <CardDescription>Bảo mật và tuân thủ quy định</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Multi-factor authentication</li>
                  <li>• Role-based access control</li>
                  <li>• Data encryption</li>
                  <li>• Audit logging</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Progress */}
      <section className="py-16 px-6 bg-white/50 dark:bg-gray-800/50">
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
                  <li>• Thiết kế kiến trúc tích hợp</li>
                  <li>• API Gateway cơ bản</li>
                  <li>• Database schema design</li>
                  <li>• Basic authentication</li>
                  <li>• Frontend framework setup</li>
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
                  <li>• Tích hợp OmniAgent API</li>
                  <li>• SR Platform integration</li>
                  <li>• Advanced workflow engine</li>
                  <li>• Real-time monitoring</li>
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
