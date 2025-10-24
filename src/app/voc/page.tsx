import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  BarChart3,
  Zap,
  Cpu,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";

export default function VOCProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            VOC Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Voice of Customer - Hệ thống phân tích và xử lý dữ liệu khách hàng
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Đang duy trì
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Team: 5 người
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
              Hệ thống xử lý và phân tích dữ liệu khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Details */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Thông Tin Dự Án</CardTitle>
                    <CardDescription>Chi tiết về VOC Project</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Mục tiêu chính
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Thu thập, xử lý và phân tích feedback từ khách hàng để cải
                      thiện dịch vụ
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
                      Xử lý hơn 100,000 feedback/ngày, tích hợp với 15+ hệ thống
                      nội bộ
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
                    <Badge variant="outline">Laravel 5.2</Badge>
                    <Badge variant="outline">PHP 7.0.33</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">Redis</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Big Data
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Apache Kafka</Badge>
                    <Badge variant="outline">Elasticsearch</Badge>
                    <Badge variant="outline">Kibana</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tính Năng Chính
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Các tính năng nổi bật của VOC Project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Data Processing</CardTitle>
                    <CardDescription>Xử lý dữ liệu lớn</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Real-time data streaming</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Batch processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Data validation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Analytics</CardTitle>
                    <CardDescription>Phân tích dữ liệu</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Sentiment analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Trend detection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Report generation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Performance</CardTitle>
                    <CardDescription>Tối ưu hiệu suất</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Caching strategy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Query optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Load balancing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Trạng Thái Hiện Tại
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Dự án đang trong giai đoạn duy trì và cải tiến
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-green-500 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">
                  Đã Hoàn Thành
                </CardTitle>
                <CardDescription>Các tính năng đã triển khai</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Hệ thống thu thập feedback tự động</li>
                  <li>• Pipeline xử lý dữ liệu real-time</li>
                  <li>• Dashboard phân tích và báo cáo</li>
                  <li>• API tích hợp với các hệ thống khác</li>
                  <li>• Hệ thống monitoring và alerting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  Đang Duy Trì
                </CardTitle>
                <CardDescription>Công việc hiện tại</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Bug fixes và performance tuning</li>
                  <li>• Cập nhật security patches</li>
                  <li>• Tối ưu hóa database queries</li>
                  <li>• Monitoring và maintenance</li>
                  <li>• User support và training</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
