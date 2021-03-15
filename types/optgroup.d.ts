import { DefineComponent } from 'vue'
import { VXEComponentInstall } from './component'

/**
 * 组件 - 下拉框选项分组
 */
export const Optgroup: VXEComponentInstall<DefineComponent>;

export interface VxeOptgroupOptions {
  /**
   * 显示内容
   */
  label?: string | number | boolean;
  /**
   * 是否禁用
   */
  visible?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
}