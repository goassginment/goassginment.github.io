import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9779847011359"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-4 bottom-4 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group animate-pulse hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white" />
      <span className="text-sm font-medium">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
