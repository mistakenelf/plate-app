<script>
  import Meta from '../../components/Meta/Meta';
  import FAB from '../../components/FAB/FAB';

  import Plate from './components/Plate/Plate';
</script>

<Meta
  title="Dashboard"
  description="Plate dashboard is where you get an overview of your plates and
  can start managing them" />

<div class="p-4">
  <div class="grid md:grid-flow-row md:grid-cols-3 gap-4">
    <Plate />
    <Plate />
    <Plate />
    <Plate />
    <Plate />
  </div>
  <FAB />
</div>
