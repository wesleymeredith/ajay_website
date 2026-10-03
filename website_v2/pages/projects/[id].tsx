import React from 'react';
import { useRouter } from 'next/router';
import { ArrowLeft, Github, Play, FileText } from 'lucide-react';
import { projects, Project } from '../../data/projects';
import Layout from '../../components/Layout';
import { profile } from '../../data/profile';
import { GetStaticPaths, GetStaticProps } from 'next';

const ProjectLinks: React.FC<{ project: Project }> = ({ project }) => {
  if (!project.github && !project.demo && !project.notebook) {
    return null;
  }

  return (
    <div className="space-y-4 mb-12">
      <h2 className="text-3xl font-semibold tracking-tight mb-6">Project Links</h2>
      <div className="flex flex-wrap gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <Github size={20} className="mr-2" />
            View Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Play size={20} className="mr-2" />
            Live Demo
          </a>
        )}
        {project.notebook && (
          <a
            href={project.notebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            <FileText size={20} className="mr-2" />
            Notes / Write-up
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout title="Project not found" description="The requested project could not be found">
        <div className="pt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
              <p className="text-gray-600 mb-8">The project you are looking for does not exist.</p>
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${project.title} — ${profile.name}`} description={project.description}>
      <div className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <p className="text-lg text-gray-600 mb-6">
              {profile.name} • {project.date}
            </p>
          </div>

          {project.images && project.images[0] && (
            <div className="mb-12">
              <img src={project.images[0]} alt={project.title} className="w-full rounded-lg shadow-lg" />
            </div>
          )}

          <ProjectLinks project={project} />

          {project.longDescription && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About this project</h2>
              <p className="text-gray-800 leading-relaxed">{project.longDescription}</p>
            </div>
          )}

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-8 border-gray-200">
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map((project) => ({ params: { id: project.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      id: params?.id ?? null,
    },
  };
};

export default ProjectPage;
