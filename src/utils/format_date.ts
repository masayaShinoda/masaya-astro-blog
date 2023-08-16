export default function format_date(str: string) {
    return new Date(str).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}