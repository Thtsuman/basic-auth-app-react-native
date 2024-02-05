import {useNavigation} from '@react-navigation/native';

export const useHistory = () => {
  const navigation = useNavigation();

  const handleNavigation = page => {
    navigation.navigate(page);
  };

  const handleGoBack = () => {
    navigation.goBack()
  }

  return {
    handleNavigation,
    handleGoBack
  };
};

