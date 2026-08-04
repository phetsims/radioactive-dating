// Copyright 2026, University of Colorado Boulder

/**
 * NOTE Describe this class and its responsibilities
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import optionize from '../../../../phet-core/js/optionize.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import RadioactiveDatingConstants from '../../common/RadioactiveDatingConstants.js';
import RadioactiveDatingModel from '../model/RadioactiveDatingModel.js';

type SelfOptions = {
 //NOTE add options that are specific to RadioactiveDatingScreenView here
};

type RadioactiveDatingScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class RadioactiveDatingScreenView extends ScreenView {

  public constructor( model: RadioactiveDatingModel, providedOptions: RadioactiveDatingScreenViewOptions ) {

    const options = optionize<RadioactiveDatingScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //NOTE add default values for optional SelfOptions here

      //NOTE add default values for optional ScreenViewOptions here
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - RadioactiveDatingConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - RadioactiveDatingConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //NOTE
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //NOTE
  }
}
