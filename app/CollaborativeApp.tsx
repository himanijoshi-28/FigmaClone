"use client";

import { useOthers } from "../liveblocks.config";

export function CollaborativeApp() {
  const others = useOthers(); 
// liveblocks hook /feature that allows us to   find if there is any other user in the room
  const userCount = others.length;
  return <div>There are {userCount} other user(s) online</div>;
}