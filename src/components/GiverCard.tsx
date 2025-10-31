import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, MapPin, Heart, Calendar } from "lucide-react";
import { GiverPost } from "../data/mockData";

interface GiverCardProps {
  post: GiverPost;
}

export function GiverCard({ post }: GiverCardProps) {
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
        <Badge variant="outline" className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800">
          Available
        </Badge>
      </div>

      <h3 className="text-gray-900 dark:text-white mb-2">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{post.description}</p>

      <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400">
        <Calendar className="w-4 h-4" />
        <span>{post.availability}</span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.createdAt}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4 fill-rose-200 dark:fill-rose-900 text-rose-500 dark:text-rose-400" />
            <span>{post.interested} interested</span>
          </div>
        </div>
        <Button size="sm" variant="outline" className="glass-button">Connect</Button>
      </div>
    </Card>
  );
}
