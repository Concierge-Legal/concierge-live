
export default async function DashboardSubpage({ params }: { params: { organizationId: string } }) {
    return (
        <div>
            <h1>Dashboard Subpage</h1>
            <p>Add content here!</p>
			<div id="organization"><p>Organization</p></div>
			<div id="profile"><p>Profile</p></div>
			<div id="users"><p>User Management</p></div>
			<div id="security"><p>Security</p></div>
        </div>
        
    )
}    