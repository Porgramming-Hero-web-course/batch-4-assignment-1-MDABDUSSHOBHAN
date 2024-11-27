
{


    function updateProfile<T extends object>(profile: T, updates: Partial<T>): T {
        return { ...profile, ...updates };
        }
        
        // Sample Input:
        const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
        console.log(updateProfile(myProfile, { age: 26 }));
        
        // Sample Output:
        // {
        // name: "Alice",
        // age: 26,
        // email: "alice@example.com"
        // }
        
}