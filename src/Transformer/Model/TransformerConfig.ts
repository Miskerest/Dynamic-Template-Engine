// Copyright (c) 2020 GitHub. This code is licensed under MIT license (see LICENSE(https://github.com/github/dynamic-template-engine/blob/master/LICENSE) for details)
import CardRendererConfigEntry from './CardRendererConfigEntry';
import EventTransformConfigEntry from './EventTransformConfigEntry';
import PartialTemplateConfigEntry from './PartialTemplateConfigEntry';

export default interface TransformerConfig{
  cardRenderer: CardRendererConfigEntry[];

  partials: PartialTemplateConfigEntry[];

  eventTransformer: EventTransformConfigEntry[];
}
