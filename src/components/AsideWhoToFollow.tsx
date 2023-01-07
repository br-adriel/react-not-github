import AsideWrapper from './AsideWrapper';
import ProfileSnippet from './ProfileSnippet';

const AsideWhoToFollow = () => {
  return (
    <AsideWrapper>
      <h3>Quem seguir</h3>
      <ProfileSnippet />
      <ProfileSnippet />
      <ProfileSnippet />
      <a href=''>Mostrar mais</a>
    </AsideWrapper>
  );
};

export default AsideWhoToFollow;
