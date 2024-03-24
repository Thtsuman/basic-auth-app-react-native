import {useNavigation, useNavigationState} from '@react-navigation/native';

export const useHistory = () => {
  const navigation = useNavigation();

  const handleNavigation = (page, state = {}) => {
    navigation.navigate(page, state);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const getCurrentRouteState = ({currentRoute}) => {
    if (!currentRoute) return null;
    const currentRouteParams = useNavigationState(
      state => state.routes.find(route => route.name === currentRoute).params,
    );

    return currentRouteParams
  };

  return {
    handleNavigation,
    handleGoBack,
    navigation,
    getCurrentRouteState,
  };
};
