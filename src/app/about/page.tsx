import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Award,
  Target,
  Heart,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto mb-6">
              <AvatarImage src="/api/placeholder/128/128" alt="Profile" />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 text-white">
                FPT
              </AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Giới Thiệu Cá Nhân
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Em là Nguyễn Ngọc Phú - dev của team dev VOC - Omni
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Thời gian: 1/1/2025 - Hiện tại</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Information */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* About Me */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">
                  Về Tôi
                </CardTitle>
                <CardDescription>Thông tin cá nhân và mục tiêu</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Tôi là một Developer Fullstack với hơn 1 năm kinh nghiệm làm
                  việc tại FPT Telecom. Với niềm đam mê công nghệ và sự nhiệt
                  huyết trong việc học hỏi, tôi đã tham gia vào nhiều dự án quan
                  trọng và đóng góp vào sự phát triển của công ty.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Tôi tin rằng công nghệ có thể thay đổi thế giới và luôn cố
                  gắng học hỏi những công nghệ mới để có thể đóng góp tốt nhất
                  cho team và công ty.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Passionate</Badge>
                  <Badge variant="secondary">Curious</Badge>
                  <Badge variant="secondary">Team Player</Badge>
                  <Badge variant="secondary">Problem Solver</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">
                  Thông Tin Liên Hệ
                </CardTitle>
                <CardDescription>Kết nối và trao đổi</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">phunn7@fpt.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">Hà Nội, Việt Nam</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hành Trình Phát Triển
            </h2>
            <p className="text-gray-600">Các mốc quan trọng trong sự nghiệp</p>
          </div>

          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          Bắt Đầu Hành Trình
                        </CardTitle>
                        <CardDescription>Tháng 1/2025</CardDescription>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">
                        Bắt đầu
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Bắt đầu làm việc tại FPT Telecom với vai trò thực tập
                      sinh, học hỏi về các công nghệ backend và frontend.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          Tham Gia Dự Án VOC
                        </CardTitle>
                        <CardDescription>Tháng 3/2025</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Dự án</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Tham gia phát triển hệ thống Customer Voice Telecom, học
                      hỏi về Laravel, Kafka và Kibana.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          Trở Thành Developer Fullstack
                        </CardTitle>
                        <CardDescription>Tháng 6/2025</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        Thăng tiến
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Được thăng cấp lên vị trí Developer Fullstack, tham gia dự
                      án OmniAgent và học thêm về OpenTelemetry.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">Hiện Tại</CardTitle>
                        <CardDescription>Tháng 10/2025</CardDescription>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">
                        Hiện tại
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Tiếp tục phát triển và học hỏi, chuẩn bị tham gia dự án
                      OmniSR với React và TypeScript.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Giá Trị & Triết Lý
            </h2>
            <p className="text-gray-600">
              Những nguyên tắc và giá trị tôi theo đuổi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Đam Mê</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Luôn giữ niềm đam mê với công nghệ và không ngừng học hỏi
                  những điều mới.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Mục Tiêu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Luôn đặt ra mục tiêu rõ ràng và nỗ lực để đạt được chúng.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Chất Lượng</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Luôn cố gắng tạo ra những sản phẩm chất lượng cao và đáp ứng
                  nhu cầu người dùng.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
