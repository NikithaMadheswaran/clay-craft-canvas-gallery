
import { useState } from 'react';
import { X, Send, Bot } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface MittiBotProps {
  onClose: () => void;
}

const MittiBot = ({ onClose }: MittiBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm MittiBot, your clay companion. I'm here to help you with product queries, delivery updates, and personalized suggestions. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('delivery') || input.includes('shipping')) {
      return "For delivery information, we offer free shipping on orders above ₹500. Standard delivery takes 3-5 business days, and express delivery is 1-2 days with additional charges. Would you like to track a specific order?";
    } else if (input.includes('size') || input.includes('dimension')) {
      return "This vase measures 12\" H x 8\" W. It's perfect for medium-sized bouquets or as a standalone decorative piece. Would you like to see size comparison with other products?";
    } else if (input.includes('material') || input.includes('clay')) {
      return "This piece is made from 100% pure clay using traditional techniques. It's eco-friendly, durable, and each piece has unique characteristics due to the handcrafting process.";
    } else if (input.includes('care') || input.includes('clean')) {
      return "To care for your clay piece: clean with a soft, damp cloth, avoid harsh chemicals, and keep away from extreme temperatures. For detailed care instructions, check our care guide.";
    } else if (input.includes('price') || input.includes('cost')) {
      return "This vase is currently priced at ₹899 (25% off the original ₹1,199). We also accept various payment methods including UPI, cards, net banking, and cash on delivery.";
    } else {
      return "I'd be happy to help you with that! You can ask me about product details, shipping information, care instructions, pricing, or any other questions about our clay products. What would you like to know?";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-end p-4">
      <div className="bg-white rounded-2xl w-96 h-96 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-terracotta-100 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-terracotta-600" />
            </div>
            <div>
              <h3 className="font-semibold text-clay-800">MittiBot</h3>
              <p className="text-xs text-sage-600">Your Clay Companion</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                  message.isBot
                    ? 'bg-sage-100 text-clay-800'
                    : 'bg-terracotta-600 text-white'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask MittiBot anything..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon" className="bg-terracotta-600 hover:bg-terracotta-700">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MittiBot;
