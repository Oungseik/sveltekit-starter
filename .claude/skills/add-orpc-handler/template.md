export async function $HANDLER_NAME(ctx: Context, input: $INPUT_TYPE) {
    // Implement handler logic here
    // Use ctx.session for auth checks
    // Query db via db.select()* functions  
    // Return JSON-serializable data

    return {
        success: true,
        data: input
    };
}