import React from 'react';

const ProjectDetail = ({ project }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <h1>{project.title}</h1>
      <h3>{project.subtitle}</h3>
      <p style={{textAlign: 'center'}}>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
