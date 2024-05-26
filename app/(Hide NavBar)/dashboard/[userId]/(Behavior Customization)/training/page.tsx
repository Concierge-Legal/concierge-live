
export default async function DashboardSubpage({ params }: { params: { userId: string } }) {
    return (
        <div>
            <h1>Dashboard Subpage</h1>
            <p>Add content here!</p>
			<div id="greetings"><p>Greetings</p></div>
			<div id="toolUse"><p>Tool Usage</p></div>
			<div id="escalation"><p>Escalation Protocol</p></div>
        </div>
        
    )
}    