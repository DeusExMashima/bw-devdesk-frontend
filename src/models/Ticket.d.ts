type SingleTicket = {
    id: number | null;
    title: string;
    status: string;
    description: string;
    asker: string;
    assignee: string;
    attempedSolutions: string;
    category: string;
    createdAt: string;
    solution: Solutions;
}

type Tickets = {
    tickets: []
}