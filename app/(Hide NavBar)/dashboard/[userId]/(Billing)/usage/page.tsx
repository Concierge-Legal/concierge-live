
export default async function DashboardSubpage({ params }: { params: { userId: string } }) {
    return (
        <div>
            <h1>Dashboard Subpage</h1>
            <p>Add content here!</p>
			<div id="usage"><p>Usage</p></div>
			<div id="billing"><p>Billing</p></div>
			<div id="invoices"><p>Invoices</p></div>
			<div id="planSettings"><p>Plan Settings</p></div>
        </div>
        
    )
}    