import { projects } from 'shared/mock-api-data/projects'

function handler(req: any, res: any) {
    if (req.method === 'GET') {
        res.status(200).json({ projects })
        return
    }
}

export default handler
