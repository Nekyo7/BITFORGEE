import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, MapPin, MessageCircle, AlertCircle } from "lucide-react";
import { SeekerPost } from "../data/mockData";

interface SeekerCardProps {
  post: SeekerPost;
}

export function SeekerCard({ post }: SeekerCardProps) {
  const urgencyColors = {
    low: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border-green-200 dark:border-green-800',
    medium: 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    high: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border-red-200 dark:border-red-800',
  };

  return (
    <Card className="p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all glass-tile">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.user.avatar} alt={post.user.name} />
            <AvatarFallback>{post.user.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-gray-900 dark:text-white">{post.user.name}</div>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <MapPin className="w-3 h-3" />
              <span>{post.user.location}</span>
            </div>
          </div>
        </div>
        <Badge variant="outline" className={urgencyColors[post.urgency]}>
          <AlertCircle className="w-3 h-3 mr-1" />
          {post.urgency}
        </Badge>
      </div>

      <h3 className="text-gray-900 dark:text-white mb-2">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{post.description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.createdAt}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span>{post.responses} responses</span>
          </div>
        </div>
        <Button size="sm" className="glass-button-primary">Connect</Button>
      </div>
    </Card>
  );
}
