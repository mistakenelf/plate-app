<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';

  import FAB from '../../../../components/FAB.svelte';
  import { currentUser } from '../../../../store/auth';
  import plateStore from '../../../../store/plate';
  import { getId } from '../../../../helpers/getId';

  let creatingPlate = false;

  const createPlate = async () => {
    creatingPlate = true;

    const plate = {
      createdBy: $currentUser.id,
      title: 'New Plate',
      dueDate: new Date(),
      description: 'Plate Description',
      notes: 'Some notes',
      status: 'open',
      todos: [],
      files: [],
      sharedWith: [],
    };

    const createdPlate = await plateStore.createPlate(plate);
    page(`/plate/${getId(createdPlate)}`);

    creatingPlate = false;
  };
</script>

<FAB icon={faPlus} loading={creatingPlate} on:click={() => createPlate()} />
