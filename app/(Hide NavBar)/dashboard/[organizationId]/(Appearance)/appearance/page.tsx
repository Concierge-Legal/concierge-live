

import UploadPicture from '@/components/dashboard/changeProfile';
import ChatWindow from '@/components/dashboard/changestoChat';



export default async function Appearance({ params }: { params: { organizationId: string } }) {
	 //   User Engagement Analytics
  //   Response Metrics
  //   Customer Insights
  //   Resolution Metrics
  //   User Satisfaction
    return (
		<div className="min-h-screen bg-gray-100">
	
		 
		<main className="container mx-auto p-8">
		  <h1 className="text-3xl font-bold mb-8">Concierge Appearance Settings</h1>
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			<UploadPicture />
			<ChatWindow />
		  </div>
		</main>
	  </div>
        


	);

}    
