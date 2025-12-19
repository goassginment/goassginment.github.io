import { Shield, Clock, Award, MessageCircle, RefreshCw, Lock } from "lucide-react";

const features = [
	{
		icon: Shield,
		title: "100% Plagiarism-Free",
		description:
			"Every assignment is written from scratch and checked through advanced plagiarism detection.",
	},
	{
		icon: Clock,
		title: "On-Time Delivery",
		description: "We respect your deadlines. Get your completed work before the submission date.",
	},
	{
		icon: Award,
		title: "Expert Writers",
		description: "Our team consists of qualified professionals with advanced degrees in their fields.",
	},
	{
		icon: MessageCircle,
		title: "24/7 Support",
		description: "Reach out anytime. Our support team is always available to assist you.",
	},
	{
		icon: RefreshCw,
		title: "Free Revisions",
		description: "Not satisfied? We offer unlimited revisions until you're completely happy.",
	},
	{
		icon: Lock,
		title: "100% Confidential",
		description: "Your privacy matters. All personal information is kept strictly confidential.",
	},
];

export default function WhyUs() {
	return (
		<section className="w-full py-12 px-4 sm:px-6" id="why-us">
			<h3 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h3>
			<div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 max-w-7xl mx-auto">
				{features.map((feature) => (
					<div
						key={feature.title}
						className="bg-white p-6 rounded shadow text-center max-w-sm flex gap-5"
					>
						<div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
							<feature.icon className="w-6 h-6 text-secondary" />
						</div>
						<div>
							<h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
							<p className="text-muted-foreground text-sm">{feature.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
