import LeadsPage from "@/components/leadspage"

export const runtime = "edge";



export const metadata = {
    title: 'Leads',
    description: 'Leads page',
}

export default function leads() {

    return (
        <>
        <LeadsPage/>
        </>
    )
}