export function formatDate(timestamp: { seconds: number; nanoseconds: number }): string {
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
