// Copyright 2026, University of Colorado Boulder

/**
 * NOTE Describe this class and its responsibilities
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import RadioactiveDatingColors from '../common/RadioactiveDatingColors.js';
import RadioactiveDatingFluent from '../RadioactiveDatingFluent.js';
import RadioactiveDatingModel from './model/RadioactiveDatingModel.js';
import RadioactiveDatingScreenView from './view/RadioactiveDatingScreenView.js';

type SelfOptions = {
  //NOTE add options that are specific to RadioactiveDatingScreen here
};

type RadioactiveDatingScreenOptions = SelfOptions & ScreenOptions;

export default class RadioactiveDatingScreen extends Screen<RadioactiveDatingModel, RadioactiveDatingScreenView> {

  public constructor( providedOptions: RadioactiveDatingScreenOptions ) {

    const options = optionize<RadioactiveDatingScreenOptions, SelfOptions, ScreenOptions>()( {
      name: RadioactiveDatingFluent.screen.nameStringProperty,

      //NOTE add default values for optional SelfOptions here

      //NOTE add default values for optional ScreenOptions here
      backgroundColorProperty: RadioactiveDatingColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new RadioactiveDatingModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new RadioactiveDatingScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}
