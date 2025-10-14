import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Báo Cáo Thu Hoạch</h3>
            <p className="text-gray-400 mb-4">
              Hành Trình Phát Triển Tại FPT Telecom
            </p>
            <p className="text-sm text-gray-500">
              Developer Fullstack - Hơn 1 năm kinh nghiệm
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Công Việc
                </Link>
              </li>
              <li>
                <Link
                  href="/lessons"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bài Học
                </Link>
              </li>
              <li>
                <Link
                  href="/future"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kế Hoạch
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Hệ</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:your.email@fpt.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/yourusername"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              © 2025 FPT Telecom. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
