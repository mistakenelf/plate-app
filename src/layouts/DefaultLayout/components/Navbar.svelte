<script>
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
  import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';

  import NavLink from '../../../components/NavLink';
  import NavItem from '../../../components/NavItem';
</script>

<NavLink href="/" icon={faChartLine} label="dashboard" />
<NavLink href="/create-plate" icon={faPlusCircle} label="create plate" />
<NavItem icon={faSignInAlt} label="login" />
<NavItem icon={faUserPlus} label="sign up" />
<NavItem icon={faSignInAlt} label="logout" />
