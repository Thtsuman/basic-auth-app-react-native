import {
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';

export const useHistory = () => {
  const navigation = useNavigation();

  const handleNavigation = (page, state = {}) => {
    navigation.navigate(page, state);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    handleNavigation,
    handleGoBack,
  };
};
