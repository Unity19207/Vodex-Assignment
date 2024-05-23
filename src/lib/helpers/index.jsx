export function getOrderStatus(status) {
    switch (status) {
        case 'NEW':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-[#9CA3AF] border border-[#374151]">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'Not Interested':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-[#EAB308] bg-[#EAB30833]">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'In Progress':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-[#3B82F6] bg-[#2563EB33]">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        case 'Sold':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-[#10B981]  bg-[#10B98133]">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
        default:
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
    }
}

export function getAssigneeStatus(status) {
    return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-[#9CA3AF] border border-[#374151]">
            {status.replaceAll('_', ' ').toLowerCase()}
        </span>
    )
}
