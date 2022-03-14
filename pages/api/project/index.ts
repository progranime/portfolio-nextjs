import { projects } from 'shared/mock-api-data/projects'

function handler(req: any, res: any) {
    if (req.method === 'GET') {
        const projectId = req.query.id,
            project = projects.find((project) => project.id == projectId)

        res.status(200).json({
            project
        })
        return
    }
}

export default handler
