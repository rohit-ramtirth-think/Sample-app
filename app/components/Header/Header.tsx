import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontType} from '../../constants/FontType';
import Row from '../Row/Row';
import CustomText from '../Text/CustomText';
import {useNavigation} from '@react-navigation/native';
import {ImagePath} from '../../constants/ImagePaths';
import {MaterialIcons} from '../Icons/MaterialIcons';
import NotificationSideModal from '../../screens/home/components/notificationsidemodal/NotificationSideModal';
import {colors} from '../../constants/Colors';

const Header = ({title, leftIcon}: any) => {
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();
  return (
    <View>
      <Row style={styles.row}>
        <TouchableOpacity
          style={{zIndex: 2}}
          onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-sharp"
            color={colors.black}
            size={responsiveFontSize(2.3)}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <CustomText
            fontSize={responsiveFontSize(2.3)}
            fontFamily={FontType.Roboto_Medium}>
            {title}
          </CustomText>
        </View>
        {leftIcon ? (
          leftIcon
        ) : (
          <>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
              <ImageBackground source={ImagePath.bellBg} style={styles.bellBg}>
                <MaterialIcons
                  name="notifications-none"
                  color={colors.black}
                  size={responsiveFontSize(3.5)}
                />
              </ImageBackground>
              <NotificationSideModal
                visible={showModal}
                setVisible={setShowModal}
              />
            </TouchableOpacity>
          </>
        )}
      </Row>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    height: '40%',
    marginBottom: responsiveHeight(1),
    paddingHorizontal: 6,
  },
  bellBg: {
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(7),
    width: responsiveWidth(12),
  },
  titleContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
  },
});
