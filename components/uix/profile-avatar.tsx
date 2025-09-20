import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function ProfileAvatar() {
  
    return (
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    );
}