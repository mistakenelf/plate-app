<script>
  import Meta from '../../components/Meta';

  import Welcome from './components/Welcome';
  import ProjectCard from './components/ProjectCard';
</script>

<Meta
  title="Dashboard"
  description="Plate dashboard is where you get an overview of your plates and
  can start managing them" />

<div class="m-4 md:m-8">
  <div class="mb-6">
    <Welcome />
  </div>
  <div class="grid md:grid-flow-row md:grid-cols-3 gap-4">
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </div>
</div>
