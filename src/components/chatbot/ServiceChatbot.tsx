import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const serviceInfo = {
  spa: {
    keywords: ['spa', 'massage', 'therapy', 'relaxation', 'body massage'],
    response: '🧖‍♀️ **Spa & Massage Services**\n\nWe offer premium spa and massage services:\n• Swedish Massage\n• Deep Tissue Massage\n• Hot Stone Therapy\n• Aromatherapy\n• Body Scrubs\n\n💰 Starting from ₹999\n📍 Available at home or spa\n⏰ 60-120 minutes sessions\n\nBook now for a relaxing experience!'
  },
  bridal: {
    keywords: ['bridal', 'bride', 'wedding', 'makeup', 'mehendi', 'henna'],
    response: '👰 **Bridal Makeup & Services**\n\nComplete bridal packages:\n• HD Bridal Makeup\n• Pre-bridal Treatments\n• Mehendi/Henna Art\n• Hair Styling\n• Saree Draping\n\n💰 Packages from ₹15,000\n📍 Home service available\n⏰ Trial sessions included\n\nMake your special day perfect!'
  },
  salon: {
    keywords: ['salon', 'hair', 'haircut', 'hairstyle', 'facial', 'cleanup', 'waxing', 'pedicure', 'manicure'],
    response: '💇‍♀️ **Beauty Salon Services**\n\nProfessional salon services:\n• Haircut & Styling\n• Hair Coloring\n• Facials & Cleanup\n• Waxing\n• Manicure & Pedicure\n• Threading\n\n💰 Starting from ₹299\n📍 Home service or salon visit\n⏰ Flexible timing\n\nGlam up today!'
  },
  booking: {
    keywords: ['book', 'appointment', 'schedule', 'reserve', 'timing'],
    response: '📅 **How to Book**\n\n1. Click "Get Started" button\n2. Choose your service\n3. Select date & time\n4. Choose therapist/beautician\n5. Confirm booking\n\n✨ Easy online payment\n🎁 Special discounts for first booking\n📞 24/7 customer support\n\nBook your service now!'
  },
  price: {
    keywords: ['price', 'cost', 'rate', 'charge', 'fee', 'payment'],
    response: '💰 **Pricing Information**\n\nOur services range:\n• Spa/Massage: ₹999 - ₹3,999\n• Salon Services: ₹299 - ₹2,499\n• Bridal Packages: ₹15,000+\n\n✅ Transparent pricing\n✅ No hidden charges\n✅ Multiple payment options\n✅ Special packages available\n\nContact us for custom quotes!'
  },
  location: {
    keywords: ['location', 'area', 'where', 'address', 'city', 'service area'],
    response: '📍 **Service Locations**\n\nWe serve across major cities:\n• Delhi NCR\n• Mumbai\n• Bangalore\n• Hyderabad\n• Pune\n• And expanding!\n\n🏠 Home service available\n🏢 Salon visits also available\n\nEnter your location while booking!'
  },
  help: {
    keywords: ['help', 'support', 'contact', 'customer care', 'query'],
    response: '🤝 **Customer Support**\n\n📞 Call: 1800-XXX-XXXX\n📧 Email: support@ombaro.com\n💬 WhatsApp: +91-XXXXXXXXXX\n\n⏰ Available 24/7\n✅ Quick response guaranteed\n\nHow can we help you today?'
  }
};

const quickReplies = [
  'Spa Services',
  'Bridal Makeup',
  'Salon Services',
  'Pricing',
  'Book Appointment',
  'Service Areas'
];

export default function ServiceChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! 👋 Welcome to OMBARO!\n\nI can help you with:\n• Spa & Massage services\n• Bridal makeup\n• Salon services\n• Booking & pricing\n\nHow can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [, service] of Object.entries(serviceInfo)) {
      if (service.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return service.response;
      }
    }

    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      return '👋 Hello! How can I help you today?\n\nYou can ask me about:\n• Spa & Massage\n• Bridal Services\n• Salon Services\n• Pricing & Booking';
    }

    if (lowerMessage.includes('thank')) {
      return '🙏 You\'re welcome! Is there anything else you\'d like to know about our services?';
    }

    return '🤔 I can help you with information about our services:\n\n• Spa & Massage\n• Bridal Makeup\n• Salon Services\n• Pricing & Booking\n• Service Areas\n\nPlease ask me about any of these!';
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findResponse(messageText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 animate-pulse" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
            1
          </span>
          <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Need help? Chat with us! 💬
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-md h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-emerald-500 sm:max-w-sm md:max-w-md">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sparkles className="w-8 h-8" />
                <span className="absolute -bottom-1 -right-1 bg-green-400 w-3 h-3 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">OMBARO Assistant</h3>
                <p className="text-xs text-emerald-100">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-emerald-700 rounded-full p-2 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-emerald-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-emerald-500 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-md border border-emerald-100'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-none shadow-md border border-emerald-100">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-emerald-50 border-t border-emerald-100">
              <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-white hover:bg-emerald-500 hover:text-white text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-200 transition-all duration-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-white border-t border-emerald-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border-2 border-emerald-200 rounded-full focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                className="bg-emerald-500 text-white p-3 rounded-full hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
