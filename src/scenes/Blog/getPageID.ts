export default function getPageID (pathname: string): number {
 const match = pathname.match(/blog\/page\/(\d+)/)

 if (match) {
   return Number(match[1])
 } else {
   return 1
 }
}